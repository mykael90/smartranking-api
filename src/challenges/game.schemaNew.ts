import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Player } from 'src/players/player.schema';

@Schema({ timestamps: true, collection: 'games' })
export class Result {
  @Prop()
  set: string;
}

@Schema({ timestamps: true, collection: 'games' })
export class Game extends Document {
  @Prop()
  category: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Player' }] })
  players: Player[];

  @Prop({ type: Types.ObjectId, ref: 'Player' })
  def: Player;

  @Prop({ type: [Result], _id: false })
  result: Result[];
}

export const ResultSchema = SchemaFactory.createForClass(Result);
export const GameSchema = SchemaFactory.createForClass(Game);
