package com.xharu.webservice;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by oopchoi on 16. 2. 20..
 */
@Controller
public class JSPController {
    @RequestMapping(value = "/view")
    public String test() {
        System.out.println("test.......................");
        return "index";
    }
}
