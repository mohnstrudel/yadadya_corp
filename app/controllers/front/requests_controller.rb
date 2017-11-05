class Front::RequestsController < FrontController

  def create
    if params[:request][:message].present?
      logger.debug "Bot tried to fill in the form. Denied."
    else
      @request = Request.new(request_params)
      
      respond_to do |format|
        if @request.save
          format.js
          RequestMailer.delay(queue: "admin", priority: 20).notify_admin(@request)
        else
          format.js { render partial: 'fail' }
        end
      end
    end
  end

  private

  def request_params
    params.require(:request).permit(:full_name, :email, :phone, :body, {attachments: []}, :message)
  end
end
