package com.maliilam.api.todo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class TodoAppController {
    @RequestMapping(value = {"/", "/setting"}, method = RequestMethod.GET)
    public String getTodos() {
        return "index";
    }
}