class Admin::PostsController < AdminController
  include CrudConcern

  before_action :find_post, only: [:edit, :update, :destroy]
  

  def index
    @posts = Post.all.order(published_at: :asc)
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    create_helper(@post, "edit_admin_post_path")
  end

  def update
    update_helper(@post, "edit_admin_post_path", post_params)
  end

  def edit
  end

  def destroy
    destroy_helper(@post, "admin_posts_path")
  end

  private

  def find_post
    @post = Post.friendly.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:title, :body, :post_category_id, :slug, :logo, :logo_inner, :active, :published_at, :bootsy_image_gallery_id)
  end

end
