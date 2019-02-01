
import {LikeComponent} from './LikeComponent';

  let component = new LikeComponent(10,true);

  component.onClick();
  console.log(`LikesConunt: ${component.likesCount} isSelected: ${component.isSelected}`);