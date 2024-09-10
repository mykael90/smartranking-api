import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsDateString,
  IsNotEmpty,
} from 'class-validator';
import { Player } from 'src/players/players.schema';

export class CreateChallengeDto {
  @IsNotEmpty()
  @IsDateString()
  challengeDate: Date;

  @IsNotEmpty()
  requester: Player;

  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(2)
  players: Player[];
}
