class WeightsController < ApplicationController
    skip_before_action :authorized, only: [:create]

    def create
        weight = Weight.new(weight_params)
        weight.date_time = DateTime.now
        weight.save
        if weight.valid?
            render json: {weight: WeightSerializer.new(weight)}, status: :created
        else
            render json: { error: 'failed to create data' }, status: :not_acceptable
        end
    end

    private

    def weight_params
        params.require(:health_data).permit(:patient_id, :value)
    end
end
