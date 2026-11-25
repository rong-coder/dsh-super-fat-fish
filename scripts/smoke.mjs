import { Context } from '@deepseek-ai/cordis'

const packages = ['daemon', 'adapter', 'frontend']

for (const name of packages) {
  const mod = await import(`../packages/${name}/lib/index.js`)
  if (typeof mod.name !== 'string' || typeof mod.apply !== 'function') {
    throw new Error(`${name}: lib/index.js does not export a Cordis plugin`)
  }
  const ctx = new Context()
  const fiber = ctx.plugin(mod)
  await fiber.dispose()
  await ctx.dispose?.()
}

const registrations = []
globalThis.window = {
  __ModuleLoader__: {
    load(registration) {
      registrations.push(registration)
    },
  },
}
await import('../packages/frontend/lib/client.js')

const registration = registrations[0]
if (registration?.id !== 'dsh-super-fat-fish-frontend') {
  throw new Error('frontend: lib/client.js did not register its client module')
}
const clientExports = registration.factory(() => {
  throw new Error('frontend: the skeleton client bundle requires no modules')
})
if (typeof clientExports.name !== 'string' || typeof clientExports.apply !== 'function') {
  throw new Error('frontend: client factory does not return a Cordis plugin')
}

console.log('smoke: 3 host plugins and 1 client bundle loaded')
