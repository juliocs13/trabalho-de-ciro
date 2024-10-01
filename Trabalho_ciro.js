class Carro {
    private String marca;
    private String nome;
    public Carro(String marca, String nome) {
        this.marca = marca;
        this.nome = nome;
    }
    public void andar() {
        System.out.println("O carro " + marca + " " + nome + " está andando");
    }
}
public class App {
    public static void main(String[] args) {
        Carro carro = new Carro("Toyota", "Corolla");

        // Irá exibir "O carro Toyota Corolla está andando".
        carro.andar();
    }
}
class Carro {
  private String marca;
  private String nome;
  public Carro(String marca, String nome) {
    this.marca = marca;
    this.nome = nome;
  }
  protected String nomeCompleto() {
    return marca + " " + nome;
  }
  public void andar() {
    System.out.println("O carro " + nomeCompleto() + " está andando");
  }
}
public class App {
  public static void main(String[] args) {
    Carro carro = new Carro("Fiat", "Gol");
    carro.marca = "VW"; // Irá apresentar um erro de compilação
    carro.andar();
  }
}
class Caminhao extends Carro {
    private int carga;
    public Caminhao(String marca, String nome, int carga) {
        super(marca, nome);
        this.carga = carga;
    }
    public void mostraCarga() {
        System.out.println("O caminhão " + super.nomeCompleto() +
        " carrega " + carga + " toneladas");
    }
}
public class App {
    public static void main(String[] args) {
        Caminhao caminhao = new Caminhao("Mercedes", "1318", 16);
        // O caminhão Mercedes 1318 carrega 16 toneladas
        caminhao.mostraCarga();
    }
}
class Caminhao extends Carro {
    private int carga;
    public Caminhao(String marca, String nome, int carga) {
        super(marca, nome);
        this.carga = carga;
    }
    public void andar() {
        System.out.println("O caminhão " + super.nomeCompleto() +
        " está carregando " + carga + " toneladas");
    }
    public void andar(boolean deRe) {
        if (deRe)
            System.out.println("O caminhão " + super.nomeCompleto() +
            " está carregando " + carga + " toneladas de ré");
        else
            andar();
    }
}
class Bomba {
    private String combustivel;
    private Carro carroAbastecendo;
    public Bomba(String combustivel) {
        this.combustivel = combustivel;
    }
    public void abastecer(Carro carro) {
        this.carroAbastecendo = carro;
        System.out.println("O " + carro.getClass().getSimpleName() + " " + carro.nomeCompleto() + " está sendo abastecido com " + this.combustivel);
    }
    public boolean estaDisponivel() {
        return this.carroAbastecendo == null;
    }
}
public class App {
    public static void main(String[] args) {
        Bomba bomba = new Bomba("Gasolina");
        bomba.abastecer(new Carro("Fiat", "Gol")); // O Carro Fiat Gol está sendo abastecido com Gasolina
    }
}
import java.util.ArrayList;
import java.util.List;
class Posto {
    private List<Bomba> bombas;
    public Posto(int numBombas) {
        bombas = new ArrayList<Bomba>();
        for (int i = 0; i < numBombas; i++) {
            bombas.add(new Bomba("Diesel"));
        }
    }
    public Bomba bombaDisponivel() throws Exception {
        for (Bomba bomba : bombas) {
            if (bomba.estaDisponivel()) {
                return bomba;
            }
        }
        throw new Exception("Nenhuma bomba disponível");
    }
}
public class App {
    public static void main(String[] args) {
        Posto posto = new Posto(3);
        Caminhao caminhao = new Caminhao("Mercedes", "1318", 16);

        try {
            Bomba bombaDisponivel = posto.bombaDisponivel();
            bombaDisponivel.abastecer(caminhao);
        } catch (Exception e) {
            System.err.println(e.getMessage());
        }

    }
}
public class Contador {
    private static int valor = 0; // Inicializa o atributo estático com valor 0
    public static void incrementa() {
        valor++; // Acessa o atributo estático e aumenta em uma unidade
    }
    public static void decrementa() {
        valor--; // Acessa o atributo estático e diminui em uma unidade
    }
    public static int getValor() {
        return valor; // Acessa o atributo estático
    }
    public static void main(String[] args) {
        // Chama o método estático getValor() que exibe: 0
        System.out.println(Contador.getValor());
        // Chama o método estático incrementa()
        Contador.incrementa();
        // Chama o método estático getValor() que exibe: 1
        System.out.println(Contador.getValor());
    }
}



