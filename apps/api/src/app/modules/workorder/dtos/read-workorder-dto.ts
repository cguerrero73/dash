import { Exclude, Expose, Type } from 'class-transformer';
import { IsNumber, IsString, IsInt, IsDate } from 'class-validator';
@Exclude()
export class ReadWorkorderDto {
  // Table fields
  @Expose()
  @IsNumber()
  readonly wrk_id: number;

  @Expose()
  @IsString()
  readonly wrk_tenant: string;

  @Expose()
  @IsString()
  readonly wrk_org: string;

  @Expose()
  @IsString()
  readonly wrk_code: string;

  @Expose()
  @IsString()
  readonly wrk_status: string;

  @Expose()
  @IsString()
  readonly wrk_rstatus: string;

  @Expose()
  @IsString()
  readonly wrk_type: string;

  @Expose()
  @IsString()
  readonly wrk_priority: string;

  @Expose()
  @IsString()
  readonly wrk_criticality: string;

  @Expose()
  @IsString()
  readonly wrk_mrc: string;


  @Expose()
  @IsNumber()
  readonly wrk_planned_hours: number;

  
  @Expose()
  @IsDate()
  readonly wrk_created: Date;

  @Expose()
  @IsDate()
  readonly wrk_reported: Date;

  @Expose()
  @IsDate()
  readonly wrk_completed: Date;

  @Expose()
  @IsDate()
  readonly wrk_start_sched: Date;

  @Expose()
  @IsDate()
  readonly wrk_end_sched: Date;

  @Expose()
  @IsDate()
  readonly wrk_imported: Date;
    
  @Expose()
  @IsString()
  readonly wrk_desc: string;

  @Expose()
  @IsString()
  readonly wrk_equip: string;

  @Expose()
  @IsString()
  readonly wrk_equip_org: string;

  @Expose()
  @IsString()
  readonly wrk_person: string;
  
}
