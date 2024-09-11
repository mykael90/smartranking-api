import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Player } from 'src/players/player.schema';

export interface Result {
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

  @Prop({ type: [{ set: { type: String } }] })
  result: Result[];
}

export const GameSchema = SchemaFactory.createForClass(Game);
