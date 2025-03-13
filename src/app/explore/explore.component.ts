import { Component } from '@angular/core';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.scss',
})
export class ExploreComponent {
  exploreCards = [
    {
      image: 'assets/images/e1.jpg',
      tag: 'Travel',
      title: 'Explore the world',
      rating: [
        {
          count: '5.0',
          class: 'bg-blue-300',
        },
      ],
      reviews: 10,
      price: '5$-300$',
      travelDestination: 'resturent',
      userImage: 'assets/images/person.png',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus voluptatum sit quia corporis incidunt reprehenderit, hic ea esse veniam unde minima molestiae natus? Aspernatur molestias facilis natus nemo officia!',
      status: [
        {
          name: 'close now',
          class: 'text-red-500',
        },
      ],
    },
    {
      image: 'assets/images/e2.jpg',
      tag: 'featured',
      title: 'swim and dine resort',
      rating: [
        {
          count: '4.5',
          class: 'bg-green-500',
        },
      ],
      reviews: 8,
      price: '50$-500$',
      travelDestination: 'hotel',
      userImage: 'assets/images/person.png',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus voluptatum sit quia corporis incidunt reprehenderit, hic ea esse veniam unde minima molestiae natus? Aspernatur molestias facilis natus nemo officia!',
      status: [
        {
          name: 'open now',
          class: 'text-green-500',
        },
      ],
    },
    {
      image: 'assets/images/e3.jpg',
      tag: 'best rated',
      title: 'europe tour',
      rating: [
        {
          count: '5.0',
          class: 'bg-yellow-300',
        },
      ],
      reviews: 15,
      price: '5k$-10k$',
      travelDestination: 'destination',
      userImage: 'assets/images/person.png',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus voluptatum sit quia corporis incidunt reprehenderit, hic ea esse veniam unde minima molestiae natus? Aspernatur molestias facilis natus nemo officia!',
      status: [
        {
          name: 'close now',
          class: 'text-red-500',
        },
      ],
    },
    {
      image: 'assets/images/e4.jpg',
      tag: 'most view',
      title: 'banglow with swiming pool',
      rating: [
        {
          count: '5.0',
          class: 'bg-purple-500',
        },
      ],
      reviews: 10,
      price: '10k$-15k$',
      travelDestination: ' real estate',
      userImage: 'assets/images/person.png',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus voluptatum sit quia corporis incidunt reprehenderit, hic ea esse veniam unde minima molestiae natus? Aspernatur molestias facilis natus nemo officia!',
      status: [
        {
          name: 'close now',
          class: 'text-red-500',
        },
      ],
    },
    {
      image: 'assets/images/e5.jpg',
      tag: 'featured',
      title: 'vintage car expo',
      rating: [
        {
          count: '4.2',
          class: 'bg-green-500',
        },
      ],
      reviews: 8,
      price: '500$-1200$',
      travelDestination: 'automotion',
      userImage: 'assets/images/person.png',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus voluptatum sit quia corporis incidunt reprehenderit, hic ea esse veniam unde minima molestiae natus? Aspernatur molestias facilis natus nemo officia!',
      status: [
        {
          name: 'open now',
          class: 'text-green-500',
        },
      ],
    },
    {
      image: 'assets/images/e6.jpg',
      tag: 'Best Rated',
      title: 'thailand tour',
      rating: [
        {
          count: '5.0',
          class: 'bg-orange-500',
        },
      ],
      reviews: 15,
      price: '5k$-10k$',
      travelDestination: 'destination',
      userImage: 'assets/images/person.png',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus voluptatum sit quia corporis incidunt reprehenderit, hic ea esse veniam unde minima molestiae natus? Aspernatur molestias facilis natus nemo officia!',
      status: [
        {
          name: 'close now',
          class: 'text-red-500',
        },
      ],
    },
  ];
}
