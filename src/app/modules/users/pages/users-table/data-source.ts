import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';

import { User } from '@models/user.model';

export class DataSourceUser extends DataSource<User> {
    data = new BehaviorSubject<User[]>([]);
    initialData: User[] = [];

    connect(): Observable<User[]> {
        return this.data;
    }

    disconnect() {
        return;
    }

    init(data: User[]): void {
        this.initialData = data;
        this.data.next(data);
    }

    /* getTotalPrices() {
        const products = this.data.getValue();
        return products
            .map(product => product.price)
            .reduce((price, total) => price + total, 0);
    }

    update(id: Product['id'], changes: Partial<Product>) {
        const products = this.data.getValue();
        const index = products.findIndex(item => item.id === id);

        if (index !== -1) {
            products[index] = { ...products[index], ...changes };
        }

        this.data.next(products);
    }

    find(query: string) {
        const filteredProducts = this.initialData
            .filter(product => product.title.toLowerCase().includes(query.toLowerCase())
                || product.id == query
                || product.price.toString().includes(query));

        this.data.next(filteredProducts);
    } */
}