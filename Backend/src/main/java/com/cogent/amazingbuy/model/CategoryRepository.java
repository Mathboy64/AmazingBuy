package com.cogent.amazingbuy.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@RepositoryRestResource(collectionResourceRel = "Category", path = "product-category")
public interface CategoryRepository extends JpaRepository<Category, Long>{

	
	
}
