import { spawn } from 'child_process'
import net from 'net'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')
const serverDir = path.join(rootDir, 'server')
const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm'

function getAvailablePort(startPort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer()

    server.once('error', (error) => {
      if (error.code === 'EADDRINUSE') {
        resolve(getAvailablePort(startPort + 1))
      } else {
        reject(error)
      }
    })

    server.once('listening', () => {
      const address = server.address()
      server.close(() => resolve(address.port))
    })

    server.listen(startPort, '0.0.0.0')
  })
}

const frontend = spawn(npmCommand, ['run', 'dev', '--', '--host', '0.0.0.0'], {
  cwd: rootDir,
  stdio: 'inherit',
  shell: process.platform === 'win32',
  env: process.env,
})

const backendPort = await getAvailablePort(3001)
console.log(`Starting backend on port ${backendPort}`)

const backend = spawn(npmCommand, ['run', 'start'], {
  cwd: serverDir,
  stdio: 'inherit',
  shell: process.platform === 'win32',
  env: {
    ...process.env,
    PORT: String(backendPort),
  },
})

const shutdown = (signal) => {
  frontend.kill(signal)
  backend.kill(signal)
}

process.on('SIGINT', () => shutdown('SIGINT'))
process.on('SIGTERM', () => shutdown('SIGTERM'))

frontend.on('exit', (code, signal) => {
  if (signal) {
    backend.kill(signal)
  } else if (code !== 0) {
    backend.kill('SIGTERM')
  }
})

backend.on('exit', (code, signal) => {
  if (signal) {
    frontend.kill(signal)
  } else if (code !== 0) {
    frontend.kill('SIGTERM')
  }
})
