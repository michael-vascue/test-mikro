import { Options } from '@mikro-orm/core';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';


const mikroConfig = Object.freeze({
  type: 'mysql',
  host: '127.0.0.1',
  port: 3316,
  user: 'test',
  password: 'test',
  dbName: 'test_mikro',
  entities: ['*.entity.js'],
  entitiesTs: ['*.entity.ts'],
  debug: true,
  forceUtcTimezone: true,
  highlighter: new SqlHighlighter(),
  metadataProvider: TsMorphMetadataProvider,
}) as Options;

export default mikroConfig;
