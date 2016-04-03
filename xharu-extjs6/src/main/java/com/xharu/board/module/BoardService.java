package com.xharu.board.module;

import com.xharu.board.Board;
import com.xharu.board.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Objects;



@Service
@Transactional
public class BoardService {
	private BoardRepository boardRepository;
	private PostRepository postRepository;
	
	@Autowired
	public void setBoardRepository(BoardRepository boardRepository) {
		this.boardRepository = boardRepository;
	}

	@Autowired
	public void setPostRepository(PostRepository postRepository) {
		this.postRepository = postRepository;
	}
	
	public Board findBoard(String boardName) {
		Board board = boardRepository.findByName(boardName);
		if(Objects.isNull(board)){
			throw new BoardNotFoundException(boardName);
		}
		return board;
	}

	public List<Board> findBoards() {
		return boardRepository.findAll();
	}

	public List<Post> findPosts(String boardName) {
		Board board = findBoard(boardName);
		
		return postRepository.findByBoard(board);
	}
	
	public Post getPost(long postId) {
		Post post = postRepository.findOne(postId);
		if(Objects.isNull(post)) {
			throw new PostNotFoundException(postId);
		}
		return post;
	}
	
	public Post writePost(String boardName, PostForm postForm) {
		Board board = findBoard(boardName);
		Post post = board.write(postForm.getAuthor(), postForm.getTitle(), postForm.getContent());

		return postRepository.save(post);
	}
	
	public Post editPost(long postId, String author, String title, String content) {
		Post post = getPost(postId);
		
		return post.update(author, title, content);
	}

	public Post erasePost(long postId) {
		Post post = getPost(postId);
		postRepository.delete(post);
		return post;
	}
}
