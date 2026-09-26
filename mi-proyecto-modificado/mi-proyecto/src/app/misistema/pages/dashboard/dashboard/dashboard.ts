import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService, Post } from '../../../services/posts.service';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
})
export class Dashboard implements OnInit {
  posts: Post[] = [];
  loading = false;
  error: string | null = null;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.loading = true;
    this.error = null;

    this.postsService.getPosts().subscribe({
      next: (data) => {
        this.posts = data.slice(0, 10);
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al consumir el endpoint:', err);
        this.error = 'No cargo.';
        this.loading = false;
      },
    });
  }
}
