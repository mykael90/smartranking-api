import { IsNotEmpty } from 'class-validator';
import { Player } from 'src/players/player.schema';
import { Result } from '../game.schema';


export class AssignChallengeGameDto {
  @IsNotEmpty()
  def: Player;

  @IsNotEmpty()
  result: Result[];
}
