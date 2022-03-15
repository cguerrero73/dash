import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('workorders')
export class Workorder extends BaseEntity {

  @PrimaryGeneratedColumn('increment', { name: 'wrk_id' })
  
  wrk_id: number;

  @Column({ type: 'varchar', length: 15, name: 'wrk_tenant', nullable: false })
  wrk_tenant: string;

  @Column({ type: 'varchar', length: 15, name: 'wrk_org', nullable: false })
  wrk_org: string;

  @Column({ type: 'varchar', length: 15, name: 'wrk_code', nullable: false })
  wrk_code: string;

  @Column({ type: 'varchar', length: 8, name: 'wrk_status', nullable: false })
  wrk_status: string;

  @Column({ type: 'varchar', length: 4, name: 'wrk_rstatus', nullable: false })
  wrk_rstatus: string;

  @Column({ type: 'varchar', length: 8, name: 'wrk_type', nullable: false })
  wrk_type: string;

  @Column({ type: 'varchar', length: 15, name: 'wrk_priority', nullable: false })
  wrk_priority: string;

  @Column({ type: 'varchar', length: 15, name: 'wrk_criticality', nullable: false })
  wrk_criticality: string;

  @Column({ type: 'varchar', length: 15, name: 'wrk_mrc', nullable: false })
  wrk_mrc: string;
  
  @Column({ type: 'numeric', precision:6, scale:2, name: 'wrk_planned_hours', nullable: false })
  wrk_planned_hours: number;

  @Column({ type: 'timestamp', name: 'wrk_created', nullable: false })
  wrk_created: Date;

  @Column({ type: 'timestamp', name: 'wrk_reported', nullable: false })
  wrk_reported: Date;

  @Column({ type: 'timestamp', name: 'wrk_completed', nullable: false })
  wrk_completed: Date;

  @Column({ type: 'timestamp', name: 'wrk_start_sched', nullable: true })
  wrk_start_sched: Date;

  @Column({ type: 'timestamp', name: 'wrk_end_sched', nullable: true })
  wrk_end_sched: Date;

  @Column({ type: 'timestamp', name: 'wrk_imported', nullable: false })
  wrk_imported: Date;

  @Column({ type: 'varchar', length: 80, name: 'wrk_desc', nullable: false })
  wrk_desc: string;

  @Column({ type: 'varchar', length: 30, name: 'wrk_equip', nullable: false })
  wrk_equip: string;

  @Column({ type: 'varchar', length: 15, name: 'wrk_equip_org', nullable: false })
  wrk_equip_org: string;

  @Column({ type: 'varchar', length: 15, name: 'wrk_person', nullable: true })
  wrk_person: string;

  @CreateDateColumn({ type: 'timestamp', name: 'wrk_rcreated', nullable: true })
  wrk_rcreate: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'wrk_rupdated', nullable: true })
  wrk_rupdated: Date;



}
