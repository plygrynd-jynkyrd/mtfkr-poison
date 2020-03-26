import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class Api {
	static Database db;

	public static void main(String[] args) throws Exception {
		db = new Database();
		SpringApplication.run(Api.class);
	}

	@GetMapping("/")
	public String home() {
		try{
			db.insertAccess();
			return String.format("Hello world!");
		}catch(Exception e){
			return e.toString();
		}
	}
}