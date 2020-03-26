import java.sql.*;
import java.time.Instant;
import java.util.*;

class Database {
  final Connection connection;

  public Database() throws SQLException {
    String url = "jdbc:postgresql://localhost/webapp";
    Properties props = new Properties();
    props.setProperty("user","cobra");
    props.setProperty("password","red_skin");
    // props.setProperty("ssl","true");
    connection = DriverManager.getConnection(url, props);
  }

  public void insertAccess() throws SQLException {
    UUID uuid = UUID.randomUUID();
    Instant now = Instant.now();
    String sqlDate = now.toString().replace('T', ' ');

    String query = String.format("INSERT INTO access (id, date) VALUES ('%s','%s');", uuid.toString(), sqlDate);
    try(Statement st = connection.createStatement();
        ResultSet rs = st.executeQuery(query)){

        }
  }
  

  
}