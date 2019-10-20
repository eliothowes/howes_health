class RespRatesController < ApplicationController
    skip_before_action :authorized, only: [:create]

    def create
        resp_rates = RespRate.new(resp_rates_params)
        resp_rates.date_time = DateTime.now
        resp_rates.save
        if resp_rates.valid?
            render json: {resp_rates: RespRateSerializer.new(resp_rates)}, status: :created
        else
            render json: { error: 'failed to create data' }, status: :not_acceptable
        end
    end

    private

    def resp_rates_params
        params.require(:health_data).permit(:patient_id, :value)
    end
end
