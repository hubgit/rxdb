export type PouchReplicationOptions = PouchDB.Core.ChangesOptions & {
  retry?: boolean
}

export type PouchSettings = PouchDB.Configuration.DatabaseConfiguration & {
  iosDatabaseLocation?: string
}

export type PouchDatabase = PouchDB.Database & EventEmitter
