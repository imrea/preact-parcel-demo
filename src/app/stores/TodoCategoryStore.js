import { observable, action, computed } from 'mobx';

class TodoCategoryStore {
  @observable
  categories = [
    {
      id: 0,
      name: 'Important',
    },
    {
      id: 1,
      name: 'Work',
    },
    {
      id: 2,
      name: 'Home',
    },
  ];

  @observable
  activeFilters = [];

  @computed
  get defaultCategory() {
    return this.categories.find(category => category.name === 'Work');
  }

  @action
  toggleCategoryFilter = category => {
    this.activeFilters = this.activeFilters.includes(category)
      ? this.activeFilters.filter(filter => filter !== category)
      : [...this.activeFilters, category];
  };
}

export default TodoCategoryStore;
