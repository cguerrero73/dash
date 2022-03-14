import { DefaultNamingStrategy, Table, NamingStrategyInterface } from "typeorm";
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export class CustomNamingStrategy extends SnakeNamingStrategy implements NamingStrategyInterface {
  
  primaryKeyName(tableOrName: Table | string, columnNames: string[]) {
    const table = tableOrName instanceof Table ? tableOrName.name : tableOrName;
    const columnsSnakeCase = columnNames.join("_");
    const startColumnName = columnNames[0].substring(0,3).toUpperCase();

    return `PK_${startColumnName}`;
    // return `PK_${table}_${columnsSnakeCase}`;
  }
}