package com.xharu;

import com.xharu.webservice.JSPController;
import org.junit.Before;
import org.junit.runner.RunWith;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.junit.Test;
import org.springframework.web.servlet.ModelAndView;

import static org.junit.Assert.assertEquals;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = XharuExtjs6Application.class)
@WebAppConfiguration
public class JSPControllerTests {

    private JSPController jspController;

    @Before
    public void setUp() throws Exception {
        jspController = new JSPController();
    }

    @Test
    public void shouldGetUserListPage() {
        String view = jspController.test();
        assertEquals("View name should be right", "index", view);
    }

}