import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Player } from 'src/players/player.schema';

@Schema({ timestamps: true, collection: 'categories' })
export class Event {
  @Prop()
  name: string;

  @Prop()
  operation: string;

  @Prop()
  value: number;
}

@Schema({ timestamps: true, collection: 'categories' })
export class Category extends Document {
  @Prop({ unique: true })
  category: string;

  @Prop()
  description: string;

  @Prop({ type: [Event], _id: false })
  events: Event[];

  @Prop({ type: [{ type: Types.ObjectId, ref: Player }] })
  players: Player[];
}

export const EventSchema = SchemaFactory.createForClass(Event);
export const CategorySchema = SchemaFactory.createForClass(Category);
