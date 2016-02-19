package com.xharu.board.module;

import java.util.List;

import com.xharu.board.Board;
import com.xharu.board.Post;
import org.springframework.data.jpa.repository.JpaRepository;


public interface PostRepository extends JpaRepository<Post, Long> {
	List<Post> findByBoard(Board board);
}
