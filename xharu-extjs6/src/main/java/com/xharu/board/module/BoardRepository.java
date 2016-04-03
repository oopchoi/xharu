package com.xharu.board.module;

import com.xharu.board.Board;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BoardRepository extends JpaRepository<Board, Long> {
	Board findByName(String name);
	List<Board> findAll();
}
