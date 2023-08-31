import { Component, OnInit } from '@angular/core';
import { SharedserviceService } from 'src/app/sharedservice.service';

export interface BackendData {
  id: number;
  name: string;
  active: number;
  inactive: number;
}
export interface ProductData {
  productId: number;
  product: string;
  subProduct: string;
  planCreatedAt: Date;
}


@Component({
  selector: 'app-manageplan',
  templateUrl: './manageplan.component.html',
  styleUrls: ['./manageplan.component.scss']
})
export class ManagePlansComponent implements OnInit {
  product:any;data:any;
  searchTerm: string = '';
  searchQuery: string = '';
  activeTab: string = 'all'; // Default active tab
  activeCount: number = 15; // Set actual count for active plans
  inactiveCount: number = 15; // Set actual count for inactive plans
  rows: BackendData[] = []; // Use BackendData type here
  filteredData: ProductData[] = []; // Add this property
  constructor(private sharedservice: SharedserviceService) {}
  Tdata: ProductData[] = [
    { productId: 112001, product: 'Travel', subProduct: 'Domestic', planCreatedAt: new Date() },
    { productId: 112002, product: 'Travel', subProduct: 'International', planCreatedAt: new Date() },
 
    // Add more data objects
  ];

  ngOnInit() {
    this.loadData();
  }
//Active Tab
  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
  // Button Method
  createNewPlan() {}

  // Data
  loadData() {
    this.sharedservice.getData().subscribe(
      (data: BackendData) => {
        this.rows = [{ ...data }]; 
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
  performSearch(): void {
    console.log('Performing search for:', this.searchQuery);
    this.filterData(); // Call the filterData method to apply search query
  }
  filterData() {
    if (this.searchQuery.trim() === '') {
      this.filteredData = this.Tdata; // If search query is empty, show all data
    } else {
      this.filteredData = this.Tdata.filter(item =>
        item.product.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        item.subProduct.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }
  
  expandedElement: ProductData | null = null;
  expandedRows: boolean[] = [];
  toggleRowDetails(index: number): void {
    this.expandedRows[index] = !this.expandedRows[index];
  }

  isRowExpanded(index: number): boolean {
    return this.expandedRows[index] || false;
  }

  getRowIconClass(index: number): string {
    return this.isRowExpanded(index) ? 'fa fa-chevron-down' : 'fa fa-chevron-right';

  }
  
}
