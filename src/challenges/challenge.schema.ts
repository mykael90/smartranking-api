import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ChallengeStatus } from './challenge-status.enum';
import { Player } from 'src/players/player.schema';
import { Game } from './game.schema';

@Schema({ timestamps: true, collection: 'challenges' })
export class Challenge extends Document {
  @Prop()
  challengeDate: Date;

  @Prop({ enum: ChallengeStatus })
  status: ChallengeStatus;

  @Prop()
  requestDate: Date;

  @Prop()
  responseDate: Date;

  @Prop({ type: Types.ObjectId, ref: 'Player' })
  requester: Player;

  @Prop()
  category: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Player' }] })
  players: Player[];

  @Prop({ type: Types.ObjectId, ref: 'Game' })
  game: Game;
}

export const ChallengeSchema = SchemaFactory.createForClass(Challenge);
