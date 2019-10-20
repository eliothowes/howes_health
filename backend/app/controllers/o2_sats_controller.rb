class O2SatsController < ApplicationController
    skip_before_action :authorized, only: [:create]

    def create
        o2_sats = O2Sat.new(o2_sats_params)
        o2_sats.date_time = DateTime.now
        o2_sats.save
        if o2_sats.valid?
            render json: {o2_sats: O2SatSerializer.new(o2_sats)}, status: :created
        else
            render json: { error: 'failed to create data' }, status: :not_acceptable
        end
    end

    private

    def o2_sats_params
        params.require(:health_data).permit(:patient_id, :value)
    end

end
