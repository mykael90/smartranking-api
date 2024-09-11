import { ArrayMinSize, IsArray, IsOptional, IsString } from 'class-validator';
import { Event } from '../category.schema';

export class UpdateCategoryDto {
  @IsString()
  @IsOptional()
  description: string;

  @IsArray()
  @ArrayMinSize(1)
  events: Event[];
}
