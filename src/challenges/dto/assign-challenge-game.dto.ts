import { IsNotEmpty } from 'class-validator';
import { Result } from '../interfaces/challenge.interface';
import { Player } from 'src/players/player.schema';

export class AssignChallengeGameDto {
  @IsNotEmpty()
  def: Player;

  @IsNotEmpty()
  result: Result[];
}
