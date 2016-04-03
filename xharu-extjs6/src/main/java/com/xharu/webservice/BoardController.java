package com.xharu.webservice;

import com.xharu.board.Board;
import com.xharu.board.Post;
import com.xharu.board.module.BoardService;
import com.xharu.board.module.PostForm;
import com.xharu.board.module.ResourceNotFoundException;
import com.xharu.webservice.support.MessageSourceAccessor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.*;

@RestController
@RequestMapping("/board")
public class BoardController {
	private BoardService boardService;
	private MessageSourceAccessor messageSource;
	
	@Autowired
	public void setBoardService(BoardService boardService) {
		this.boardService = boardService;
	}
	@Autowired
	public void setMessageSource(MessageSource messageSource){
		this.messageSource = new MessageSourceAccessor(messageSource);
	}
	
	@RequestMapping(value = "/{boardname}/info", method = { RequestMethod.GET, RequestMethod.HEAD })
	public ResponseEntity<Board> info(@PathVariable String boardname) {
		return ResponseEntity.ok(boardService.findBoard(boardname));
	}
	
	@RequestMapping(value = "/", method = { RequestMethod.GET, RequestMethod.HEAD })
	public ResponseEntity<List<Board>> listBoards() {
		return ResponseEntity.ok(boardService.findBoards());
	}

	@RequestMapping(value = "/{boardname}/list", method = { RequestMethod.GET, RequestMethod.HEAD })
	public ResponseEntity<List<Post>> listPosts(@PathVariable String boardname) {
		return ResponseEntity.ok(boardService.findPosts(boardname));
	}

	@RequestMapping(value = "/{boardname}/{postId}", method = { RequestMethod.GET, RequestMethod.HEAD })
	public ResponseEntity<Post> getPost(@PathVariable String boardname, @PathVariable Long postId) {
		return ResponseEntity.ok(boardService.getPost(postId));
	}
	
	@RequestMapping(value = "/{boardname}", method = { RequestMethod.POST })
	public ResponseEntity<Post> createPost(@PathVariable String boardname, @Valid PostForm postForm) {
		return ResponseEntity.status(HttpStatus.CREATED).body(boardService.writePost(boardname, postForm));
	}
	
	@RequestMapping(value = "/{boardname}/{postId}", method = { RequestMethod.PUT })
	public ResponseEntity<Post> updatePost(@PathVariable Long postId, String author, String title, String content) {
		System.out.println("updatePost():" + postId + ", " + author + ", " + title + ", " + content);
		return ResponseEntity.ok(boardService.editPost(postId, author, title, content));
	}
	
	@RequestMapping(value = "/{boardname}/{postId}", method = { RequestMethod.DELETE })
	public ResponseEntity<Post> deletePost(@PathVariable Long postId) {
		return ResponseEntity.ok(boardService.erasePost(postId));
	}
	
	@ExceptionHandler(ResourceNotFoundException.class)
	public ResponseEntity<Map<String, Object>> resourceNotFoundException(ResourceNotFoundException exception, Locale locale){
		System.out.print(exception.getError());
		Map<String, Object> body = new LinkedHashMap<>();
		body.put("timestamp", new Date());
		body.put("status", exception.getStatus());
		body.put("error", exception.getError());
		body.put("message", messageSource.getMessage(exception.getCode(), exception.getArgs(), locale).orElse("No message available"));
		
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(body);
	}

}
