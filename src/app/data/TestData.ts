// тестовые данные в виде массивов (заменяют таблицы БД)

import {Category} from '../model/Category';
import {Priority} from '../model/Priority';
import {Task} from '../model/Task';

export class TestData {

  static categories: Category[] = [
    {id: 1, title: 'Робота'},
    {id: 2, title: 'Сімя'},
    {id: 3, title: 'Навчання'},
    {id: 4, title: 'Відпочинок'},
    {id: 5, title: 'Спорт'},
    {id: 6, title: 'Їжа'},
    {id: 7, title: 'Фінанси'},
    {id: 8, title: 'Гаджети'},
    {id: 9, title: 'Здоровя'},
    {id: 10, title: 'Автомобіль'},
    {id: 11, title: 'Ремонт'},
  ];

  /*--------------------------------------------------*/
  static priorities: Priority[] = [
    {id: 1, title: 'Низький', color: '#e5e5e5'},
    {id: 2, title: 'Середній', color: '#85D1B2'},
    {id: 3, title: 'Високий', color: '#F1828D'},
    {id: 4, title: 'Негайно!!', color: '#F1128D'}
  ];

  // не забывать - индексация приоритетов и категорий начинается с нуля
  /*--------------------------------------------------*/
  static tasks: Task[] = [
    {
      id: 1,
      title: 'Залить бензин полный бак',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[9]

    },

    {
      id: 2,
      title: 'Передать отчеты начальнику управления',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[0]

    },

    {
      id: 3,
      title: 'Убраться у себя в комнате, полить растения',
      priority: TestData.priorities[2],
      completed: true,
      category: TestData.categories[1]

    },

    {
      id: 4,
      title: 'Сходить в парк с семьей, пригласить друзей',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[1]

    },
    {
      id: 5,
      title: 'Найти и выучить учебник по квантовой физике',
      completed: false,
      category: TestData.categories[2]
    },
    {
      id: 6,
      title: 'Сходить на семинар по программированию',
      priority: TestData.priorities[1],
      completed: true,
      category: TestData.categories[2]

    },

    {
      id: 7,
      title: 'Найти билеты в Турцию, выбрать отель',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[3]
    },
    {
      id: 8,
      title: 'Приготовить ужин для всей семьи (семга с картошкой)',
      completed: false,
      category: TestData.categories[5]
    },
    {
      id: 9,
      title: 'Подтянуться 10 раз',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[4]

    },
    {
      id: 10,
      title: 'Пробежать 100 м',
      priority: TestData.priorities[0],
      completed: true,
      category: TestData.categories[4]
    },

    {
      id: 11,
      title: 'Организовать детский праздник ',
      completed: false
    },

    {
      id: 12,
      title: 'Сходить на лекцию "Как научиться программировать на Java"',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[2]
    },
    {
      id: 13,
      title: 'Купить продукты на неделю',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[5]

    },

    {
      id: 14,
      title: 'Провести собрание по поводу всех проектов',
      completed: true,
      category: TestData.categories[0]
    },

    {
      id: 15,
      title: 'Сдать экзамен по Java',
      priority: TestData.priorities[2],
      completed: true
    },


    {
      id: 16,
      title: 'Положить 100 000 р в банк на депозит',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[6]
    },

    {
      id: 17,
      title: 'Попросить аванс на работе',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[6]
    },

    {
      id: 18,
      title: 'Сдать анализы, проверить гемоглобин',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[8]


    },

    {
      id: 19,
      title: 'Сравнить новый айпад с самсунгом',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[7]


    },

    {
      id: 20,
      title: 'Футбол с сотрудниками',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[4]


    }

  ];

}

