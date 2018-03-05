class Front::PostsController < FrontController
  def index
    @categories = PostCategory.all

    post_amount = Post.active.count
    page_size = Rails.application.config.page_size
    @page = (params[:page] || 1).to_i
    @pages_total = post_amount / page_size
    if post_amount%page_size != 0
      @pages_total += 1
    end

    if params[:category]
      @posts = Post.by_category(params[:category])
    else
      @posts = Post.all
    end

    begin
      @posts = @posts.active.order(published_at: :desc).paginate(page: params[:page], per_page: page_size)
    rescue RangeError => e
      @posts = @posts.active.order(published_at: :desc).paginate(page: 1, per_page: page_size)
      logger.debug e.message
    end
  end

  def show
    @post = Post.friendly.find(params[:id])

    @previous_post = @post.prev

    @next_post = @post.next

  end
end
