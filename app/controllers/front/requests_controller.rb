class Front::RequestsController < FrontController

  def create
    allow_send = true
    puts "Timer 1: #{session[:timer_1].to_time.class}"

    session[:timer_2] = Time.now
    puts "Timer 2: #{session[:timer_2].class}"
    if session[:timer_2] - session[:timer_1].to_time < 20
      allow_send = false
      logger.debug "Timer too fast. Bot tried to fill in the form. Denied."
      logger.debug "Timer 1: #{session[:timer_1]}, Timer 2: #{session[:timer_2]}. Difference: #{session[:timer_2] - session[:timer_1].to_time}"
    end
    if params[:request][:message].present?
      allow_send = false
      logger.debug "Message present. Bot tried to fill in the form. Denied."
    end

    puts "Allow send is: #{allow_send}"
    
      
    @request = Request.new(request_params)
    if allow_send
      respond_to do |format|
        if @request.save
            format.js
          RequestMailer.notify_admin(@request).deliver_now
        else
          format.js { render partial: 'fail' }
        end
      end
    else
      @request.errors.add(:bot, "К сожалению, у нас подозрение, что вы бот. Попробуйте заполнить форму ещё раз.")
      respond_to do |format|
        format.js { render partial: 'fail' }
        format.html
      end
      
    end
  end

  private

  def request_params
    params.require(:request).permit(:full_name, :email, :phone, :body, {attachments: []}, :message)
  end
end
