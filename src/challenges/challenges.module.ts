import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesModule } from 'src/categories/categories.module';
import { PlayersModule } from 'src/players/players.module';
import { ChallengesController } from './challenges.controller';
import { ChallengesService } from './challenges.service';
import { GameSchema } from './game.schema';
import { ChallengeSchema } from './challenge.schema';


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Challenge', schema: ChallengeSchema },
      { name: 'Game', schema: GameSchema },
    ]),
    PlayersModule,
    CategoriesModule,
  ],
  controllers: [ChallengesController],
  providers: [ChallengesService],
})
export class ChallengesModule {}
