package com.xharu.board.module;

import com.xharu.board.Board;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardRepository extends JpaRepository<Board, Long> {
	Board findByName(String name);
}
