package com.maliilam.api.todo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TodoController {
	@GetMapping("/")
	public String index() {
		return "hello!";
	}
}
