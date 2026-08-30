function PricingVariant({ variant }) {
  return (
    <div className="pricing-variant">
      <div className="pricing-variant__media">
        <img src={variant.image} alt={variant.alt} loading="lazy" />
      </div>
      <div className="pricing-variant__body">
        <p className="pricing-variant__label">{variant.label}</p>
        <ul className="pricing-variant__tiers">
          {variant.tiers.map((tier) => (
            <li key={tier.name}>
              <span>{tier.name}</span>
              <strong>{tier.price}</strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function PricingGroup({ group }) {
  return (
    <div className="pricing-group">
      <h3 className="pricing-group__title">{group.title}</h3>
      <div className="pricing-group__variants">
        {group.variants.map((variant) => (
          <PricingVariant key={variant.label} variant={variant} />
        ))}
      </div>
    </div>
  )
}

function LinePricing({ pricing, pricingNote }) {
  if (!pricing && !pricingNote) return null

  return (
    <div className="product-line__pricing">
      {pricing && (
        <>
          <h2 className="product-line__pricing-title">tarifas</h2>
          {pricing.map((group) => (
            <PricingGroup key={group.title} group={group} />
          ))}
        </>
      )}
      {pricingNote && <p className="product-line__pricing-note">{pricingNote}</p>}
    </div>
  )
}

export default LinePricing
