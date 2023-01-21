import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Interest from './interests.entities';
import Post from './posts.entities';

@Entity('interests_post')
class InterestsPost {
  @PrimaryGeneratedColumn('uuid')
    id: string;

  @ManyToOne(() => Interest, (interest) => interest.interestsPost, {
    cascade: true,
    onDelete: 'CASCADE',
  })
    interest: Interest;

  @ManyToOne(() => Post, (post) => post.interestsPost, {
    cascade: true,
    onDelete: 'CASCADE',
  })
    post: Post;
}

export default InterestsPost;
