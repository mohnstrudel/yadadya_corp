module CrudConcern 
  extend ActiveSupport::Concern
  

  included do
    helper_method :create_helper, :update_helper, :destroy_helper, :get_locales
  end


  def create_helper(object, path)
    if object.save
      respond_to do |format|
        format.html {
          redirect_to send(path, object)
          flash[:primary] = "Well done!"
        }
      end
    else
      render :new
      flash[:danger] = "Something not quite right"
    end
  end

  def update_helper(object, path, params)
    if object.update(params)
      respond_to do |format|
        format.html {
          redirect_to send(path, object)
          flash[:primary] = "Well done!"
        }
      end
    else
      render :edit
      flash[:danger] = "Something's not quite right"
    end
  end

  def destroy_helper(object, path)
    if object.destroy
      respond_to do |format|
        format.html {
          redirect_to send(path)
          flash[:primary] = "Well done"    
        }
      end
    else
      render :index
      flash[:danger] = "Something's not quite right"
    end
  end

end