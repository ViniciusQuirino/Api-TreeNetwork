import { MigrationInterface, QueryRunner } from "typeorm";

export class correction1674330302085 implements MigrationInterface {
    name = 'correction1674330302085'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "interests_post" DROP CONSTRAINT "FK_352b78a0ed3543ca91aa6481fe4"`);
        await queryRunner.query(`ALTER TABLE "interests_post" DROP CONSTRAINT "FK_41f7408f5011b1ca5b18ed4667f"`);
        await queryRunner.query(`ALTER TABLE "interests_post" ADD CONSTRAINT "FK_41f7408f5011b1ca5b18ed4667f" FOREIGN KEY ("interestId") REFERENCES "interests"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "interests_post" ADD CONSTRAINT "FK_352b78a0ed3543ca91aa6481fe4" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "interests_post" DROP CONSTRAINT "FK_352b78a0ed3543ca91aa6481fe4"`);
        await queryRunner.query(`ALTER TABLE "interests_post" DROP CONSTRAINT "FK_41f7408f5011b1ca5b18ed4667f"`);
        await queryRunner.query(`ALTER TABLE "interests_post" ADD CONSTRAINT "FK_41f7408f5011b1ca5b18ed4667f" FOREIGN KEY ("interestId") REFERENCES "interests"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "interests_post" ADD CONSTRAINT "FK_352b78a0ed3543ca91aa6481fe4" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
