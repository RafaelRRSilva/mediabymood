-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`filmes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`filmes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(100) NOT NULL,
  `ano` INT NOT NULL,
  `duracao` INT NOT NULL,
  `resumo` TEXT NOT NULL,
  `imagem` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `nome_UNIQUE` (`titulo` ASC) VISIBLE,
  UNIQUE INDEX `resumo_UNIQUE` (`resumo` ASC) VISIBLE,
  UNIQUE INDEX `imagem_UNIQUE` (`imagem` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(120) NOT NULL,
  `e-mail` VARCHAR(120) NOT NULL,
  `senha` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `e-mail_UNIQUE` (`e-mail` ASC) VISIBLE,
  UNIQUE INDEX `senha_UNIQUE` (`senha` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`filmes_has_usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`filmes_has_usuarios` (
  `filmes_id` INT NOT NULL,
  `usuarios_id` INT NOT NULL,
  `avaliacao` TINYINT NOT NULL,
  PRIMARY KEY (`filmes_id`, `usuarios_id`),
  INDEX `fk_filmes_has_usuarios_usuarios1_idx` (`usuarios_id` ASC) VISIBLE,
  INDEX `fk_filmes_has_usuarios_filmes_idx` (`filmes_id` ASC) VISIBLE,
  CONSTRAINT `fk_filmes_has_usuarios_filmes`
    FOREIGN KEY (`filmes_id`)
    REFERENCES `mydb`.`filmes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_filmes_has_usuarios_usuarios1`
    FOREIGN KEY (`usuarios_id`)
    REFERENCES `mydb`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`humores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`humores` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `nome_UNIQUE` (`nome` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`filmes_has_humores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`filmes_has_humores` (
  `filmes_id` INT NOT NULL,
  `humores_id` INT NOT NULL,
  `nivel` INT NOT NULL,
  PRIMARY KEY (`filmes_id`, `humores_id`),
  INDEX `fk_filmes_has_humores_humores1_idx` (`humores_id` ASC) VISIBLE,
  INDEX `fk_filmes_has_humores_filmes1_idx` (`filmes_id` ASC) VISIBLE,
  CONSTRAINT `fk_filmes_has_humores_filmes1`
    FOREIGN KEY (`filmes_id`)
    REFERENCES `mydb`.`filmes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_filmes_has_humores_humores1`
    FOREIGN KEY (`humores_id`)
    REFERENCES `mydb`.`humores` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
