-- MySQL Workbench Synchronization
-- Generated: 2022-04-28 14:48
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: lecar

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

ALTER TABLE `media_by_mood`.`filmes_has_usuarios` 
DROP FOREIGN KEY `fk_filmes_has_usuarios_filmes`,
DROP FOREIGN KEY `fk_filmes_has_usuarios_usuarios1`;

ALTER TABLE `media_by_mood`.`filmes_has_humores` 
DROP FOREIGN KEY `fk_filmes_has_humores_filmes1`,
DROP FOREIGN KEY `fk_filmes_has_humores_humores1`;



ALTER TABLE `media_by_mood`.`filmes_has_humores` 
DROP INDEX `fk_filmes_has_humores_filmes1_idx` ;




ALTER TABLE `media_by_mood`.`filmes_has_usuarios` 
ADD CONSTRAINT `fk_filmes_has_usuarios_filmes`
  FOREIGN KEY (`filmes_id`)
  REFERENCES `media_by_mood`.`filmes` (`id`)
  ON DELETE CASCADE
  ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_filmes_has_usuarios_usuarios1`
  FOREIGN KEY (`usuarios_id`)
  REFERENCES `media_by_mood`.`usuarios` (`id`)
  ON DELETE CASCADE
  ON UPDATE NO ACTION;

ALTER TABLE `media_by_mood`.`filmes_has_humores` 
ADD CONSTRAINT `fk_filmes_has_humores_filmes1`
  FOREIGN KEY (`filmes_id`)
  REFERENCES `media_by_mood`.`filmes` (`id`)
  ON DELETE CASCADE
  ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_filmes_has_humores_humores1`
  FOREIGN KEY (`humores_id`)
  REFERENCES `media_by_mood`.`humores` (`id`)
  ON DELETE CASCADE
  ON UPDATE NO ACTION;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
