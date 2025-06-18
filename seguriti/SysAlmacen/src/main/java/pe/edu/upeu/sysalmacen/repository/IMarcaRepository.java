package pe.edu.upeu.sysalmacen.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import pe.edu.upeu.sysalmacen.model.Cliente;
import pe.edu.upeu.sysalmacen.model.Marca;

import java.util.Optional;

public interface IMarcaRepository  extends ICrudGenericoRepository<Marca, Long>{
    @Query(nativeQuery = true, value = "SELECT MAX(id_marca) AS id FROM upeu_marca")
    Optional<Long> maxID();
}
