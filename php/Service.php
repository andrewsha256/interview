<?php

namespace Test\Service;

use Test\DatabaseInterface;  // интерфейс класса, который работает с БД
use Test\DatabaseSingleton;  // Имплементация DatabaseInterface в виде Singleton
use Test\EntityInterface;
use Test\EntityNotFoundException;

class MyController {

	/**
	 * @var DatabaseInterface
	 */
	private $storage;

	public function __construct()
	{
		$this->storage = DatabaseSingleton.getInstance();
	}

	/**
	 * Возвращает объект по идентификатору
	 * 
	 * @param string $id идентификтаор объекта
	 *
	 * @throws EntityNotFoundException
	 *
	 * @return EntityInterface
	 */
	public function getById(string $id): EntityInterface
	{
		$entity = $this->storage->findById($id);

		if (null === $entity) {
			throw new EntityNotFoundException($id);
		}
	}

	public function update(EntityInterface $entity)
	{
		$this->storage->update($entity);
	}
	
	public function create(EntityInterface $entity): string
	{
		$createdId = $this->storage->create($entity);
		return $createdId;
	}
}
