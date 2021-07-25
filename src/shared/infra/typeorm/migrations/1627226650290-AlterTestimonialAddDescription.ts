import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AlterTestimonialAddDescription1627226650290
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'testimonials',
      new TableColumn({
        name: 'description',
        type: 'varchar',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('testimonials', 'description');
  }
}
