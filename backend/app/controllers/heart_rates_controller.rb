class HeartRatesController < ApplicationController
    skip_before_action :authorized, only: [:create]

    def create
        heart_rate = HeartRate.new(heart_rate_params)
        heart_rate.date_time = DateTime.now + 1.hour
        heart_rate.save
        if heart_rate.valid?
            render json: {heart_rate: HeartRateSerializer.new(heart_rate)}, status: :created
        else
            render json: { error: 'failed to create data' }, status: :not_acceptable
        end
    end

    private

    def heart_rate_params
        params.require(:health_data).permit(:patient_id, :value)
    end

end
